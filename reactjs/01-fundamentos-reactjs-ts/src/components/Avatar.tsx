import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBoder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ src, hasBoder = true, alt }: AvatarProps) {
  return (
    <img
      className={hasBoder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
