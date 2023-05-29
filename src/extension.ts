import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('list aligner activated');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('list-aligner.align', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// get selected text
			const text = document.getText(selection);

			// align the text
			const aligned = alignText(text);

			// replace the selected text with the aligned text
			editor.edit(editBuilder => {
				editBuilder.replace(selection, aligned);
			});
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

function alignText(text: string): string {
	// Split the text into lines.
	const lines = text.split('\n');

	// Get items from lines.
	const { indentations, items } = extractItems(lines);

	// Get maximum lengths.
	const maxLengths = calculateMaxLengths(items);

	// Create aligned items.
	const alignedItems = alignItems(items, maxLengths, indentations);

	// Combine the lines back into text.
	return alignedItems.join('\n');
}

function extractItems(lines: string[]): { indentations: string[], items: string[][] } {
	return {
		indentations: lines.map(line => (line.match(/^\s*/) || "")[0]),
		items: lines.map(line => line.trim().split(',')),
	};
}


function calculateMaxLengths(items: string[][]): number[] {
	return items[0].map((col, i) => Math.max(...items.map(row => row[i]?.trim().length || 0)));
}

function alignItems(items: string[][], maxLengths: number[], indentations: string[]): string[] {
	// Adding a space after comma and keeping original indentation
	return items.map((item, i) => indentations[i] + item.map((s, i) => s.trim() + ' '.repeat(maxLengths[i] - s.trim().length) + ' ').join(','));
}