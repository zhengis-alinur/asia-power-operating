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
  VideoSurveillance = "VideoSurveillance",
  AccessControlAndManagementSystem = "AccessControlAndManagementSystem",
  AutomaticFireAlarm = "AutomaticFireAlarm",
  UninterruptiblePowerSupplies = "UninterruptiblePowerSupplies",
}

export type Product = {
  id: string;
  image: string;
  name: string;
  __html: string;
};
