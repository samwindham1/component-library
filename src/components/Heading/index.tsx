import { HeadingProps } from './types';
import { Heading as StyledHeading } from './styles';

const headingLevel = (level: number): React.ElementType => {
    const headings: React.ElementType[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if (level < 1 && level > 6) level = 1;
    return headings[level - 1];
};

export const Heading = ({ level, children }: HeadingProps) => (
    <StyledHeading as={headingLevel(level)} level={level}>
        {children}
    </StyledHeading>
);
