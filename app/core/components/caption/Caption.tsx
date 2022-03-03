import { Text } from "@mantine/core";
import CaptionProps from "./interface/CaptionProps";

/**
 * A caption text-based component.
 */
export default function Caption({ text }: CaptionProps) {
    return (
        <Text size="xs" color="dimmed">{text}</Text>
    );
}