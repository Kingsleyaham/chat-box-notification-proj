import React, { useState } from "react";
import EditProfile from "../../../assets/edit-profile.png";
import Button from "../../../components/form/Button";
import DatePicker from "../../../components/form/DatePicker";
import countries from "../../../countries.json";

type StateProps = {
  code: string;
  name: string;
  subdivision: null | string;
};

const AccountOverview = () => {
  const [states, setStates] = useState<StateProps[]>([]);

  const populateStates = (selectedCountry: string) => {
    const newStates = countries.filter(
      (country) => country.name.toLowerCase() === selectedCountry
    )[0].states;

    setStates(newStates);
  };
  return (
    <div className="px-8 md:px-12 pb-28">
      <div className="pt-6 lg:pt-2 pb-6 ">
        <h2 className="text-3xl font-bold">Account Overview</h2>
      </div>

      <div className="bg-white rounded-lg  shadow-md">
        {/* Avatar Section */}
        <div className="py-6 border-b flex flex-col md:flex-row items-center justify-start gap-0 md:gap-16">
          <div className="px-8">
            <h3>Avatar</h3>
            <p className="text-lg">Edit your profile picture</p>
          </div>
          <div className="md:order-last order-first">
            <img
              src={EditProfile}
              alt="edit profile"
              // width="90px"
              // height="90px"
              className="md:w-24 md:h-24 w-16 h-16"
            />
          </div>
        </div>
        {/* Contact Info Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Contact Info</h3>
            <p className="text-lg">Update your contact Info</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <div className="form-control">
              <label className="label">
                <span>Full Name</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="fullname"
                placeholder="Just Answer"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Email Address</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="email"
                placeholder="besimple@design.com"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Phone Number</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="phone_num"
                placeholder="+234 803 884 8947"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Additional Info</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <div className="form-control">
              <label className="label">
                <span>Select Location</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="location"
                placeholder="Just Answer"
              />
            </div>

            <div className="flex justify-between items-center gap-3">
              <div className="form-control">
                <label className="label">
                  <span>DOB</span>
                </label>
                <DatePicker name="date_of_birth" placeholder="Choose date" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Sex</span>
                </label>
                <select className="input-control" name="gender">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:px-8 px-4">
            <h3>Address</h3>
            <p className="text-lg">Add other Info about you</p>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <div className="form-control">
              <label className="label">
                <span>Home Address</span>
              </label>
              <input type="text" className="input-control" name="address" placeholder="Address" />
            </div>

            <div className="form-control">
              <label className="label">
                <span>State</span>
              </label>
              <select className="input-control" name="state" defaultValue="">
                <option disabled selected>
                  Select State
                </option>
                {states?.map((state, index) => (
                  <React.Fragment key={index}>
                    <option value={state.name.toLowerCase()}>{state.name}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span>Country</span>
              </label>
              <select
                className="input-control"
                name="country"
                defaultValue=""
                onChange={(e) => populateStates(e.target.value)}
              >
                <option disabled selected>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <React.Fragment key={index}>
                    <option value={country.name.toLowerCase()}>{country.name}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Social Media Contact Section */}
        <div className="py-6 border-b flex flex-col md:flex-row justify-start gap-4 md:gap-16">
          <div className="md:pl-8 px-4">
            <h3>Social Media Contact</h3>
          </div>
          <div className="lg:w-3/6 md:w-4/6 w-full md:px-0 md:pr-4 px-4">
            <div className="form-control">
              <label className="label">
                <span>Facebook</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="facebook_profile"
                placeholder="Facebook.com/"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Whatsapp</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="whatsapp_profile"
                placeholder="wa.me//+234"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Instagram</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="instagram_profile"
                placeholder="instagram.com/"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span>Twitter</span>
              </label>
              <input
                type="text"
                className="input-control"
                name="twitter_profile"
                placeholder="x.com/"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around md:justify-end py-8 lg:py-16 lg:px-24 lg:gap-12 gap-1 md:mx-3 lg:mx-1">
          <button className="btn btn-ghost text-danger text-[14px] px-4 md:text-lg">
            Deactivate Account
          </button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
