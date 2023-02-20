import { getCategories } from "./categories";

const items = [
  {
    _id: "1",
    name: "NDB Vlogging Camera 4K",
    category: { _id: "1", name: "DSLR Camera" },
    description:
      "NBD Vlogging Camera 4K 48MP Digital Camera for Photography, Compact Camera for YouTube with Flip Screen, Autofocus, 16X Digital Zoom, 52mm Wide Angle & MacroLens, 32GB TF Card",
    price: 13220,
    stock: 5,
  },
  {
    _id: "2",
    name: "Nikon Black COOLPIX B500",
    category: { _id: "1", name: "DSLR Camera" },
    description:
      "Nikon Black COOLPIX B500 Digital Camera with 16 Megapixels and 40x Optical Zoom",
    price: 26360,
    stock: 15,
  },
  {
    _id: "3",
    name: "Sony Cyber-shot DSC-RX100",
    category: { _id: "2", name: "Point & Shoot Camera" },
    description:
      "Sony Cyber-shot DSC-RX100 VA Camera DSC-RX100M5A/B With Soft Bag, Tripod, 2x Extra Batteries, LED Light, 2x 64GB Memory Card, Card Reader , Plus Essential Accessories",
    price: 70645,
    stock: 9,
  },
  {
    _id: "4",
    name: "Canon EOS 4000D",
    category: { _id: "1", name: "DSLR Camera" },
    description:
      "Canon EOS 4000D / Rebel T100 Camera + Canon 18-55mm + 70-300mm +64GB Memory Cards +ZeeTech Accessory Bundle",
    price: 43795,
    stock: 10,
  },
  {
    _id: "5",
    name: "Canon PowerShot SX720 HS",
    category: { _id: "2", name: "Point & Shoot Camera" },
    description:
      "Canon PowerShot SX720 HS 20.3MP 40X Zoom Built-In Wifi / NFC Full HD 1080p Point and Shoot Digital Camera Red",
    price: 48670,
    stock: 12,
  },
  {
    _id: "6",
    name: "Sony Alpha a6000",
    category: { _id: "3", name: "Mirrorless Camera" },
    description:
      "Sony Alpha a6000 Mirrorless Camera with 16-50mm Lens Black Starter Kit",
    price: 56560,
    stock: 13,
  },
  {
    _id: "7",
    name: "Canon EOS M5",
    category: { _id: "3", name: "Mirrorless Camera" },
    description:
      "Canon EOS M5 Mirrorless Wi-Fi Enabled, Built-In Bluetooth Digital Camera with 15-45mm Lens (international Version No Warranty)",
    price: 54945,
    stock: 6,
  },
  {
    _id: "8",
    name: "Nikon COOLPIX S7000",
    category: { _id: "2", name: "Point & Shoot Camera" },
    description:
      "Nikon COOLPIX S7000 Digital Camera with 20x Optical Zoom and Built-In Wi-Fi (Used)",
    price: 24710,
    stock: 2,
  },
  {
    _id: "9",
    name: "Fujifilm instax Mini",
    category: { _id: "4", name: "Instant Camera" },
    description: "Fujifilm instax Mini EVO Hybrid Camera",
    price: 20575,
    stock: 8,
  },
  {
    _id: "10",
    name: "Canon EOS M50 Mark II",
    category: { _id: "3", name: "Mirrorless Camera" },
    description:
      "Canon EOS M50 Mark II Mirrorless Digital Camera with 15-45mm Lens (4728C006) + 64GB Extreme Pro Card + Extra LPE12 Battery + Case + UV Filter + Card Reader + 3 Piece Filter Kit + HDMI Cable + More",
    price: 64450,
    stock: 2,
  },
];

const categories = getCategories();

export function getItems() {
  return items;
}

export function getItem(_id) {
  const item = items.find((item) => item._id === _id);

  if (item) return item;

  return null;
}

export function saveItem(item) {
  const itemInStock = items.find((obj) => obj._id === item._id) || {};

  itemInStock.name = item.name;
  itemInStock.category = categories.find((c) => c._id === item.categoryId);
  itemInStock.description = item.description;
  itemInStock.price = item.price;
  itemInStock.stock = item.stock;

  if (!itemInStock._id) {
    const _id = new Date().toString();

    itemInStock._id = _id;
    items.push(itemInStock);
  }

  return itemInStock;
}

export function deleteItem(item) {
  const foundedItem = items.find((obj) => obj._id === item._id);
  items.splice(items.indexOf(foundedItem), 1);
  return items;
}
