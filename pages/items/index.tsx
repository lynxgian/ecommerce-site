import { prisma } from "@/lib/services";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const items = await prisma.item.findMany()
  return {
    props :{
      items
    }
  }

}

export default function Items({items}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
          
          <p>Items</p>

          {items.map(x => {
            return (
              <>
              <p>{x.name}</p>
              <p>{x.price}</p>
              </>
            )
          })}
        </>
    );
  }
  