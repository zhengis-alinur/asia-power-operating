export enum Category {
  CableAndWireProducts = "CableAndWireProducts",
  LowVoltageEquipment = "LowVoltageEquipment",
  ElectricalInstallationProducts = "ElectricalInstallationProducts",
  ElectricalMountingProducts = "ElectricalMountingProducts",
  LightingProducts = "LightingProducts",
  CableLayingSystems = "CableLayingSystems",
  MeteringAndControlDevices = "MeteringAndControlDevices",
  ToolsAndProtectiveEquipment = "ToolsAndProtectiveEquipment",
  Cabinets = "Cabinets",
}

export type Product = {
  id: string;
  image: string;
  name: string;
  __html: string;
};
