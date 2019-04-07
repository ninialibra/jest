import "jest";
import User from "../src/user/User";
import UserSession from "../src/user/UserSession";
import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import TripService from "../src/trip/TripService";

describe("test TripService", () => {

  it("throw an exception when user is not logged", () => {

      const trip = new TripService();

      const spy = jest.spyOn(UserSession, 'getLoggedUser').mockImplementationOnce(() => null);

      expect(() => {
        trip.getTripsByUser(null)
      }).toThrowError(UserNotLoggedInException);

  });    

});
