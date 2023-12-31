import ToggleSwitch from "../../../../components/ToggleSwitch";

const NotificationSetting = () => {
  return (
    <div className="pt-8 md:px-0 p-4">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:px-4 sm:px-2 px-0 md:border-b-0 border-b">
        <div className="w-full">
          <h3>Email Notification</h3>
          <p>
            Select when you’ll be notified on your mailbox and get mail notifications when you’re
            not active. You can turn this off anytime.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>Buyers Purchase</h3>
              <p>
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>When Product is ordered</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>When a product is bookmarked</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>Buyers Visit</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
      <br />
      {/* push notification */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:px-4 sm:px-2 px-0">
        <div className="w-full">
          <h3>Push Notification</h3>
          <p>
            Get notified when buyers visit your product. This helps you know what they want and
            update your products.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>Buyers Purchase</h3>
              <p>
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>When Product is ordered</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>When a product is bookmarked</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>

          <div className="flex items-center justify-between md:justify-end pb-6 gap-8">
            <div>
              <h3>Buyers Visit</h3>
              <p className="text-[16px] text-base">
                Get notified when buyers visit your product. This helps you know what they want and
                update your products.
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
