import Head from "next/head";
import Image from "next/image";
import GeneralLayout from "../components/GeneralLayout";
import styles from "../styles/Home.module.css";
import Home from '../screens/Home';

export default function Index() {
  return (
    <>
      <GeneralLayout>
        <Home />
      </GeneralLayout>
    </>
  );
}
