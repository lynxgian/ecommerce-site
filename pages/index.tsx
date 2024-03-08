import Footer from "@/components/footer";
import Items from "@/components/items";
import Testimonials from "@/components/testimonials";
import { prisma } from "@/lib/services";
import { InferGetServerSidePropsType } from "next";



export const getServerSideProps = async () => {
  const items = await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      orderId: true,
      cartId: true,
    }
  })
  const testimonials = await prisma.testimonials.findMany({
    select: {
      name: true,
       message: true, 
       avatar: true, 
       profession: true, 
       keyMessage: true
    }
  })
  return {
    props: {
      items: items,
      testimonials
    }
  }
}
export default function Home({items, testimonials}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <>
      <Items items={items} />
      <Testimonials testimonials={testimonials} />
      </>
  );
}
