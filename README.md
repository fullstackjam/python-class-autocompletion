# Python Class Autocompletion for Visual Studio Code

This extension provides autocompletion for `self` and `cls` parameters in Python class methods in Visual Studio Code.

## Features

- Automatically suggests `self` as the first parameter when you start typing a Python instance method.
- Automatically suggests `cls` as the first parameter when you start typing a Python class method decorated with `@classmethod`.
- Does not suggest any parameters for Python static methods decorated with `@staticmethod`.

## Usage

1. Install the extension in Visual Studio Code.
2. Open a Python file.
3. Start typing a Python class method. The extension will automatically suggest `self` or `cls` as the first parameter.

## Requirements

- Visual Studio Code 1.80.0 or later.
- Python extension for Visual Studio Code.

## Known Issues

Please report any issues on the [GitHub repository](https://github.com/fullstackjam/python-class-autocompletion).

## Release Notes

### 0.0.1

Initial release of Python Class Autocompletion.

## Contributing

Contributions are welcome! Please submit a pull request on the [GitHub repository](https://github.com/fullstackjam/python-class-autocompletion).

## License

[MIT](LICENSE)
