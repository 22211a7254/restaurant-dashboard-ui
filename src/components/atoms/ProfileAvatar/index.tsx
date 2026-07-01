import { Avatar } from "@mui/material";

interface ProfileAvatarProps {
  image: string;
  size?: number;
  alt?: string;
}

const ProfileAvatar = ({
  image,
  size = 180,
  alt = "Profile",
}: ProfileAvatarProps) => {
  return (
    <Avatar
      src={image}
      alt={alt}
      variant="circular"
      sx={{
        width: size,
        height: size,
        bgcolor: "transparent",
        border: "3px solid #f5f5f5",
        boxShadow: 3,
      }}
    />
  );
};

export default ProfileAvatar;