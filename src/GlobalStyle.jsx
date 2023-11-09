import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: "Agbalumo", cursive;
  background-color: #e2e2e2;
  overflow-x: hidden;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: column;
  background-color: #191b1c;
  padding: 60px;
  border-radius: 20px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 80px;
  text-align: center;
  color: #e2e2e2;
  margin-bottom: 30px;
`;

export const MensagemError = styled.p`
  color: #8d001d;
  font-size: 24px;
  font-style: italic;
  align-self: flex-start;
  font-family: "Playpen Sans", cursive;
`;
