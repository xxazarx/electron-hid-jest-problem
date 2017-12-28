import * as HID from "node-hid";

export default class HidLogic {
    public static listDeviceNames(): string[] {
        const devices = HID.devices();
        return devices.map((device) => {
            return device.manufacturer + " - " + device.product;
        });
    }
}