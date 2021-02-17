import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';

const ContentWrapper = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
`;

const Layout = ({ children }) => (
	<>
		<GlobalStyle />
		<Header />
		<ContentWrapper>{children}</ContentWrapper>
		<Footer />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
