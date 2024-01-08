module.exports = {
    require: 'chai/register-assert',
    extension: ['js', 'mjs'], // autoriser les deux types de fichiers
    spec: ['test/**/*.js', 'test/**/*.mjs'],
    recursive: true,
    exit: true,
  };
  