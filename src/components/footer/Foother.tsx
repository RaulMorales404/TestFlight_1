import { FlexView, FooterText, LinkText } from "@components/styles/styles";

interface PropsFoother {
  text: string;
  textLink: string;
  w?: string;
}
export const Foother = ({text, textLink, w = '200px'}: PropsFoother) => {
  return (
    <FlexView width="100%" alignItems="center" justifyContent="center">
      <FlexView width={w}>
        <FooterText>
          {text} <LinkText>{textLink}</LinkText>
        </FooterText>
      </FlexView>
    </FlexView>
  );
};
