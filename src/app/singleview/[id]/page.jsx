const page = async ({ params }) => {
  const { id } = await params;
  return <>singleview: {id}</>;
};

export default page;
