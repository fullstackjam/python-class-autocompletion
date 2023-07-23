import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider(
        'python',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith('(')) {
                    return undefined;
                }

                const line = document.lineAt(position.line).text;
                const lineUntilPosition = line.slice(0, position.character);
                const previousLine = position.line > 0 ? document.lineAt(position.line - 1).text : '';

                if (previousLine.trim() === '@staticmethod') {
                    return undefined;
                }

                if (previousLine.trim() === '@classmethod') {
                    const completionItem = new vscode.CompletionItem('cls', vscode.CompletionItemKind.Snippet);
                    completionItem.insertText = new vscode.SnippetString('cls${0}');
                    completionItem.documentation = new vscode.MarkdownString("Insert 'cls' keyword.");
                    return [completionItem];
                }

                if (previousLine.trim() === '@property' || previousLine.trim() === '@abstractmethod') {
                    const completionItem = new vscode.CompletionItem('self', vscode.CompletionItemKind.Snippet);
                    completionItem.insertText = new vscode.SnippetString('self${0}');
                    completionItem.documentation = new vscode.MarkdownString("Insert 'self' keyword.");
                    return [completionItem];
                }

                let match = lineUntilPosition.match(/^\s*def\s+\w+\s*\($/);
                if (match) {
                    const completionItem = new vscode.CompletionItem('self', vscode.CompletionItemKind.Snippet);
                    completionItem.insertText = new vscode.SnippetString('self${0}');
                    completionItem.documentation = new vscode.MarkdownString("Insert 'self' keyword.");
                    return [completionItem];
                }

                return undefined;
            }
        },
        '(' // triggered whenever a '(' is being typed
    );

    context.subscriptions.push(provider);
}
