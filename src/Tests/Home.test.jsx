import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Containers/Home';
import SimpleTabs from '../Components/SimpleTabs';

configure({adapter: new Adapter()});

describe('<Home />', () => {
    it('Should contain one occurrence of <DataTable /> ', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find(SimpleTabs)).toHaveLength(1);
    })
})