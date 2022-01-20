
const houseSchema = ({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = ('House', houseSchema);
