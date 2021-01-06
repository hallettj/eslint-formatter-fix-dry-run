# eslint-formatter-fix-dry-run

Custom eslint formatter whose only output is file content after running fixes.
This formatter is intended for use with eslint's `--fix-dry-run` flag which
emits fixed file content in the command output instead of modifying files in
place.

If you run eslint on a file that it is configured to ignore then this formatter
will produce no output.

This formatter works best when eslint is applied to one file at a time. If you
fix multiple files at a time then file contents in `stdout` will be separated by
null characters (`\0`).

Install with,

    $ yarn add --dev eslint-formatter-fix-dry-run

## Why

Running `eslint --fix` is ever so handy. You can use that command to apply
formatting with prettier if you have the prettier plugin set up, and to fix
other problems at the same time.

But sometimes you don't want to modify files in place. For example if you want
to use [git-format-staged][] to fix files in a pre-commit hook it's important
that the eslint command sends fixed file content to `stdout`. Eslint has
a `--fix-dry-run` option that almost does this, but you need to use a
[custom formatter][] to read fixed output. The stock `json` formatter works, but
to get fixed file content you need to pipe output to `jq` or another program
that can parse JSON. That makes writing fixing scripts tricky if you don't want
to assume that users will have `jq` installed.

[git-format-staged]: https://github.com/hallettj/git-format-staged
[custom formatter]: https://eslint.org/docs/developer-guide/working-with-custom-formatters

Eslint-formatter-fix-dry-run outputs fixed file content to `stdout`, and nothing
else, so you don't need any extra processing.
