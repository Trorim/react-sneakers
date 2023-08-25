import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        speed={1}
        width={210}
        height={260}
        viewBox="0 0 210 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="30" y="36" rx="5" ry="5" width="150" height="100" />
        <rect x="30" y="165" rx="5" ry="5" width="150" height="15" />
        <rect x="30" y="187" rx="5" ry="5" width="120" height="15" />
        <rect x="29" y="227" rx="5" ry="5" width="90" height="20" />
        <rect x="150" y="218" rx="5" ry="5" width="30" height="30" />
    </ContentLoader>
);

export default Skeleton;
