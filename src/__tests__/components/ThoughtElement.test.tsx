import React from 'react';
import renderer from 'react-test-renderer';
import { ThoughtElement, RenderType, IThoughtElementProps } from '../../components/ThoughtElement/index'
import { mockedThoughList } from '../../common/mockedData';

test('renders correctly', () => {
    const props: IThoughtElementProps = {
        navigation: null,
        thought: mockedThoughList[0],
        renderType: RenderType.ARROW_LEFT_SIDE
    }
    const tree = renderer.create(<ThoughtElement {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});