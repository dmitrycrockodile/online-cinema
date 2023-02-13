import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
   <ContentLoader 
      speed={2}
      width={200}
      height={280}
      viewBox="0 0 200 280"
      backgroundColor="#1b1b1bd0"
      foregroundColor="#1f1f1f"
      {...props}
   >
      <rect x="0" y="0" rx="20" ry="20" width="200" height="280" />
   </ContentLoader>
)

export default Skeleton