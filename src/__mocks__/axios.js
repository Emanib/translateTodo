const {mockData} = require("./followersDataMock");
module.exports = {
    get :jest.fn().mockResolvedValue(mockData)
}