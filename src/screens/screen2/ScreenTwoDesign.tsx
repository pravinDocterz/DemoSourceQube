/* eslint-disable */
import {
	AspectRatio,
	Box,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue
} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
const ScreenTwoDesign=() => {
	return (
		<SafeAreaView>
			<Box
				shadow="2"
				rounded="lg"
				w={{base: '100%',md: '100%',lg: '100%'}}
				_light={{bg: 'coolGray.50'}}
				_dark={{bg: 'gray.700'}}
				h={{
					base: '100%',
					md: '100%',
					lg: '100vh'
				}}
			>
				<AspectRatio w="100%" ratio={{
					base: 4/2,
					md: 4/3,
					lg: 10/3
				}}
					backgroundColor={'red.300'}
					height={{
						//base: 200,
						//md: 768,
					}}>
					<Image
						resizeMode="stretch"
						h={'100%'}
						source={require('../../images/HeroImage.jpeg')}
						alt="image base"
					/>
				</AspectRatio>
				<Text bold position="absolute" color="black" zIndex={2} top="0" m="4" size="xl">
					Welcome
				</Text>
				<Stack space="2" p="4">
					<Text color="gray.400" fontSize={useBreakpointValue({base: "3xl",sm: "xl",md: "2xl",lg: "lg"})}>July 18, 2023</Text>
					<Heading size={"2xl"} fontWeight="medium">
						The Garden City
					</Heading>
					<Text isTruncated noOfLines={useBreakpointValue({
						base: 2,      // Default number of lines for smaller devices
						sm: 3,       // Show 3 lines for small devices
						md: 4,       // Show 4 lines for medium-sized devices
						lg: 3,       // Show 5 lines for large devices
						xl: 7,       // Show 6 lines for extra-large devices
					})} fontSize={useBreakpointValue({base: "3xl",sm: "3xl",md: "4xl",lg: "xl"})}>
						Bengaluru (also called Bangalore) is the center of India's
						high-tech industry. It is located in southern India on the Deccan
						Plateau.The city is also known for its parks and nightlife.
						Bangalore is the major center of India's IT industry, popularly
						known as the Silicon Valley of India.
					</Text>
				</Stack>
				<HStack space="3" px="4" pb="4">
					{/*<MoreIcon _light={{color: "emerald.800"}} _dark={{color: "emerald.300"}} />*/}
					<Text _light={{color: 'emerald.800'}} _dark={{color: 'emerald.300'}} fontSize={useBreakpointValue({base: "3xl",sm: "xl",md: "2xl",lg: "lg"})}>
						Find out more
					</Text>
				</HStack>
			</Box>
		</SafeAreaView>
	);
};

export default ScreenTwoDesign;
