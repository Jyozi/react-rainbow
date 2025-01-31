import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledText = attachThemeAttrs(styled.h1)`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: ${props => props.palette.text.label};
    position: absolute;
    bottom: 8px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledText;
