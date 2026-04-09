const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cms.thebench.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn-api.swapcard.com',
			},
			{
				protocol: 'https',
				hostname: 'static.swapcard.com',
			}
		],
	}
};

export default nextConfig;
