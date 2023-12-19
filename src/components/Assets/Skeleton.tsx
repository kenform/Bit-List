import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={1550}
		height={500}
		viewBox='0 0 1550 500'
		backgroundColor='#C7E1FF'
		foregroundColor='#464e62'
	>
		<circle cx='56' cy='46' r='46' />
		<rect x='116' y='32' rx='10' ry='10' width='700' height='25' />
		<rect x='836' y='32' rx='10' ry='10' width='150' height='25' />
		<rect x='1026' y='32' rx='10' ry='10' width='150' height='25' />
		<rect x='1218' y='32' rx='10' ry='10' width='150' height='25' />
		<rect x='1400' y='32' rx='10' ry='10' width='150' height='25' />

		<circle cx='56' cy='172' r='46' />
		<rect x='116' y='160' rx='10' ry='10' width='700' height='25' />
		<rect x='836' y='160' rx='10' ry='10' width='150' height='25' />
		<rect x='1026' y='160' rx='10' ry='10' width='150' height='25' />
		<rect x='1218' y='160' rx='10' ry='10' width='150' height='25' />
		<rect x='1400' y='160' rx='10' ry='10' width='150' height='25' />

		<circle cx='56' cy='300' r='46' />
		<rect x='116' y='288' rx='10' ry='10' width='700' height='25' />
		<rect x='836' y='288' rx='10' ry='10' width='150' height='25' />
		<rect x='1026' y='288' rx='10' ry='10' width='150' height='25' />
		<rect x='1218' y='288' rx='10' ry='10' width='150' height='25' />
		<rect x='1400' y='288' rx='10' ry='10' width='150' height='25' />

		<circle cx='56' cy='430' r='46' />
		<rect x='116' y='418' rx='10' ry='10' width='700' height='25' />
		<rect x='836' y='418' rx='10' ry='10' width='150' height='25' />
		<rect x='1026' y='418' rx='10' ry='10' width='150' height='25' />
		<rect x='1218' y='418' rx='10' ry='10' width='150' height='25' />
		<rect x='1400' y='418' rx='10' ry='10' width='150' height='25' />
	</ContentLoader>
);

export default Skeleton;

