module.exports = (req, res) => {
  res.status(200).json({ ok: true, service: 'prima16-hub', time: new Date().toISOString() });
};
