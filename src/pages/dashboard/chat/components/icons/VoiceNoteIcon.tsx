import { ChatIconProps } from "../ChatFooter";

const VoiceNoteIcon = ({ isMobile }: ChatIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "20" : "30"}
      height={isMobile ? "20" : "30"}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M11.25 26.25H18.75M22.5 12.1875V14.0625C22.5 18.1875 19.125 21.5625 15 21.5625C10.875 21.5625 7.5 18.1875 7.5 14.0625V12.1875M15 21.5625V26.25"
        stroke="#111110"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M15 18.75C14.3813 18.7486 13.7692 18.6228 13.2 18.3803C12.6308 18.1377 12.1161 17.7832 11.6866 17.3379C10.8072 16.451 10.3134 15.2529 10.3125 14.0039V7.50003C10.3101 6.88379 10.4297 6.27317 10.6645 5.70337C10.8992 5.13357 11.2444 4.61587 11.6801 4.18012C12.1159 3.74436 12.6336 3.39918 13.2034 3.16446C13.7732 2.92974 14.3838 2.81013 15 2.81254C17.6286 2.81254 19.6875 4.87152 19.6875 7.50003V14.0039C19.6875 16.6207 17.5846 18.75 15 18.75Z"
        fill="#111110"
      />
    </svg>
  );
};

export default VoiceNoteIcon;
