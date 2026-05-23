
const Skeleton = ({ width, height, marginBottom, borderRadius }:
    { width: number | string; height?: number | string; marginBottom?: number | string, borderRadius: any }) => (
    <div className="sk-skeleton" style={{ width, height, marginBottom, borderRadius }} />
);

type Props = {
    loading: boolean;
    width?: number | string;
    height?: number | string;
    children?: React.ReactNode;
    marginBottom?: any;
    borderRadius?: any;
};
export default function AppSkeleton(props: Props) {
    const { children, loading, height, marginBottom, width,borderRadius } = props;
    if (!loading) return <>{children}</>;
    return <Skeleton borderRadius={borderRadius ?? undefined} width={width ?? '100%'} height={height ?? 16} marginBottom={marginBottom ?? 10} />
}
