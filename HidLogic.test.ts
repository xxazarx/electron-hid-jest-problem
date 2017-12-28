import HidLogic from "./HidLogic";

it ("hid devices", () => {
    const result = HidLogic.listDeviceNames();
    expect(result).not.toBeNull();
    expect(result.length).toBeGreaterThan(0);
});
