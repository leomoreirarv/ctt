import DashboardModel from "./dashboard-model";

describe("Dashboard Model", () => {
    it("dashboardmodel should not be null", () => {
        var model = new DashboardModel("", "", "", "");
        expect(model).not.toBeNull();
    });
});