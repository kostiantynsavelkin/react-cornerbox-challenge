// components/CornerBox.tsx
import React from 'react';
import { styled } from '../stitches.config';

// Define the types of corners that can be used
type CornerType = 'square' | 'angled' | 'boxed';

// Define the props for the CornerBox component
export interface CornerBoxProps {
    topLeft?: CornerType;
    topRight?: CornerType;
    bottomLeft?: CornerType;
    bottomRight?: CornerType;
    topLeftSize?: string;
    topRightSize?: string;
    bottomLeftSize?: string;
    bottomRightSize?: string;
    backgroundColor?: string;
    borderColor?: string;
    children?: React.ReactNode;
}

// Styled component for the outer wrapper of the CornerBox
const CornerBoxWrapper = styled('div', {
    position: 'relative',
    display: 'inline-block',
    width: '500px',
    height: '200px',
    padding: '2px',
    transition: 'clip-path 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out',
});

// Styled component for the inner box of the CornerBox
const InnerBox = styled('div', {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: '1em',
    transition: 'clip-path 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out',
});

// CornerBox component definition
const CornerBox: React.FC<CornerBoxProps> = ({
    topLeft = 'square',
    topRight = 'square',
    bottomLeft = 'square',
    bottomRight = 'square',
    topLeftSize = '0.75em',
    topRightSize = '0.75em',
    bottomLeftSize = '0.75em',
    bottomRightSize = '0.75em',
    backgroundColor = 'white',
    borderColor = 'black',
    children,
}) => {
    // Function to get the corner value based on the corner type and size
    const getCornerValue = (type: CornerType, size: string) => {
        switch (type) {
            case 'angled':
                return `calc(${size} * 1)`;
            case 'boxed':
                return size;
            default:
                return '0em';
        }
    };

    // Generate the clip-path polygon based on the corner types and sizes
    const cornerInset = `polygon(
        ${getCornerValue(topLeft, topLeftSize)} 0,
        ${topLeft === 'boxed' ? `${topLeftSize} ${topLeftSize}, 0 ${topLeftSize},` : `${getCornerValue(topLeft, topLeftSize)} 0, 0 ${getCornerValue(topLeft, topLeftSize)},`}
        0 ${getCornerValue(topLeft, topLeftSize)},
        0 calc(100% - ${getCornerValue(bottomLeft, bottomLeftSize)}),
        ${bottomLeft === 'boxed' ? `${bottomLeftSize} calc(100% - ${bottomLeftSize}), ${bottomLeftSize} 100%,` : `0 calc(100% - ${getCornerValue(bottomLeft, bottomLeftSize)}), ${getCornerValue(bottomLeft, bottomLeftSize)} 100%,`}
        ${getCornerValue(bottomLeft, bottomLeftSize)} 100%,
        calc(100% - ${getCornerValue(bottomRight, bottomRightSize)}) 100%,
        ${bottomRight === 'boxed' ? `calc(100% - ${bottomRightSize}) 100%, calc(100% - ${bottomRightSize}) calc(100% - ${bottomRightSize}),` : `calc(100% - ${getCornerValue(bottomRight, bottomRightSize)}) 100%, 100% calc(100% - ${getCornerValue(bottomRight, bottomRightSize)}),`}
        100% calc(100% - ${getCornerValue(bottomRight, bottomRightSize)}),
        100% ${getCornerValue(topRight, topRightSize)},
        ${topRight === 'boxed' ? `calc(100% - ${topRightSize}) ${topRightSize}, calc(100% - ${topRightSize}) 0,` : `100% ${getCornerValue(topRight, topRightSize)}, calc(100% - ${getCornerValue(topRight, topRightSize)}) 0,`}
        calc(100% - ${getCornerValue(topRight, topRightSize)}) 0, calc(100% - ${getCornerValue(topRight, topRightSize)}) 0,
        ${getCornerValue(topLeft, topLeftSize)} 0
    )`;

    return (
        <CornerBoxWrapper
            style={{
                backgroundColor: borderColor,
                clipPath: cornerInset,
            }}
        >
            <InnerBox
                style={{
                    backgroundColor,
                    clipPath: cornerInset,
                }}
            >
                {children}
            </InnerBox>
        </CornerBoxWrapper>
    );
};

export default CornerBox;


