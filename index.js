/**
 * Custom eslint formatter that outputs only fixed output to stdout. If you run
 * eslint on multiple files, outputs for fixed files are separated by null
 * characters. When run on a file that eslint is configured to ignore the
 * formatter will produce no output.
 */
module.exports = function (results) {
  return results.map((r) => r.output && r.output.trim()).join("\0");
};
