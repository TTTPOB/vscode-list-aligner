This is the README for the extension "list-aligner". List Aligner is a handy
extension for Visual Studio Code that helps to tidy up your list data in Python
code. It vertically aligns the elements of your lists based on commas,
transforming your lists into a cleaner, tabular look.

## Features

With just a single command, List Aligner will format your Python lists to a more
readable and tidy form. It takes your multiple lists and aligns them vertically
based on commas. This is an excellent tool for Python developers dealing with
large blocks of list data that need to be quickly and easily organized.

Simply select the block of lists in your code, open the command palette
(`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS), and type "Align Lists". List Aligner
will do the rest!
```python

# before
["apple", "banana", "cherry", "dates"]
["red", "yellow", "red", "brown"]
["fruit", "fruit", "fruit", "dry fruit"]

# after
["apple","banana","cherry","dates" ]
["red"  ,"yellow","red"   ,"brown"]
["fruit","fruit" ,"fruit" ,"dry fruit"]
```


## Requirements

This extension works out of the box with Visual Studio Code and requires no
additional dependencies.

## Extension Settings

List Aligner doesn't require any additional settings or configuration. Just
install the extension, and it's ready to use.

## Known Issues

Currently, there are no known issues. If you encounter any problems, please
report them on the issue tracker. However there are some limitations, since this
is a extension align text solely by comma, it can't identify the meaning of the
selected python code. thus if you want to align complex format, it may not work.
And also, I wrote this extension with ChatGPT, and only for my personal use in
snakemake. I often need to align serveral long lists of literals, so I design
this extension mainly to fullfil only this need. It is not designed for other
complicated cases (at least for now).

## Release Notes

### 1.0.0

Initial release of List Aligner.

## Following extension guidelines

This extension follows the best practices as outlined in the [Extension
Guidelines](https://code.visualstudio.com/api/references/extension-guidelines).

**Enjoy using List Aligner for cleaner, more readable Python lists!**