import * as categoryAPI from "./categories";

const items = [
  {
    _id: "1",
    itemName: "Canon EOS 4000D",
    category: { _id: "1", name: "DSLR Cameras" },
    description:
      "Canon EOS 4000D / Rebel T100 Camera + Canon 18-55mm + 70-300mm +64GB Memory Cards +ZeeTech Accessory Bundle",
    price: "43,795",
    stock: "10",
  },
  {
    _id: "2",
    itemName: "NDB Vlogging Camera 4K",
    category: { _id: "1", name: "DSLR Cameras" },
    description:
      "NBD Vlogging Camera 4K 48MP Digital Camera for Photography, Compact Camera for YouTube with Flip Screen, Autofocus, 16X Digital Zoom, 52mm Wide Angle & MacroLens, 32GB TF Card",
    price: "13,220",
    stock: "5",
  },
  {
    _id: "3",
    itemName: "Nikon Black COOLPIX B500",
    category: { _id: "1", name: "DSLR Cameras" },
    description:
      "Nikon Black COOLPIX B500 Digital Camera with 16 Megapixels and 40x Optical Zoom",
    price: "26,360",
    stock: "15",
  },
  {
    _id: "4",
    itemName: "Sony Cyber-shot DSC-RX100",
    category: { _id: "2", name: "Point & Shoot Cameras" },
    description:
      "Sony Cyber-shot DSC-RX100 VA Camera DSC-RX100M5A/B With Soft Bag, Tripod, 2x Extra Batteries, LED Light, 2x 64GB Memory Card, Card Reader , Plus Essential Accessories",
    price: "70,645",
    stock: "9",
  },
  {
    _id: "5",
    itemName: "Canon PowerShot SX720 HS",
    category: { _id: "2", name: "Point & Shoot Cameras" },
    description:
      "Canon PowerShot SX720 HS 20.3MP 40X Zoom Built-In Wifi / NFC Full HD 1080p Point and Shoot Digital Camera Red",
    price: "48,670",
    stock: "12",
  },
  {
    _id: "6",
    itemName: "Sony Alpha a6000",
    category: { _id: "3", name: "Mirrorless Cameras" },
    description:
      "Sony Alpha a6000 Mirrorless Camera with 16-50mm Lens Black Starter Kit",
    price: "56,560",
    stock: "13",
  },
  {
    _id: "7",
    itemName: "Canon EOS M5",
    category: { _id: "3", name: "Mirrorless Cameras" },
    description:
      "Canon EOS M5 Mirrorless Wi-Fi Enabled, Built-In Bluetooth Digital Camera with 15-45mm Lens (international Version No Warranty)",
    price: "54,945",
    stock: "6",
  },
  {
    _id: "8",
    itemName: "Nikon COOLPIX S7000",
    category: { _id: "2", name: "Point & Shoot Cameras" },
    description:
      "Nikon COOLPIX S7000 Digital Camera with 20x Optical Zoom and Built-In Wi-Fi (Used)",
    price: "24,710",
    stock: "2",
  },
  {
    _id: "9",
    itemName: "Canon EOS M50 Mark II",
    category: { _id: "3", name: "Mirrorless Cameras" },
    description:
      "Canon EOS M50 Mark II Mirrorless Digital Camera with 15-45mm Lens (4728C006) + 64GB Extreme Pro Card + Extra LPE12 Battery + Case + UV Filter + Card Reader + 3 Piece Filter Kit + HDMI Cable + More",
    price: "64,450",
    stock: "2",
  },
  {
    _id: "10",
    itemName: "Fujifilm instax Mini",
    category: { _id: "4", name: "Instant Cameras" },
    description: "Fujifilm instax Mini EVO Hybrid Camera",
    price: "20,575",
    stock: "8",
  },
];

export function getItems() {
  return items;
}

export function getItem(_id) {
  const item = items.filter((item) => item._id === _id);
  return item;
}
