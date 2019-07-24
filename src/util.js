const strip = x => x.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

module.exports = {
  strip,
};
