import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import { API } from '../constants/AppConstants';
import { formatSecondsToDHM } from '../utils/GeneralUtils';

export type statsDataProps = {
  volumeProcessed: number,
  feeSaved: number,
  swapSaved: number,
  timeSaved: number,
  lastUpdated: string
};
export type statsDataType = {
  title: string;
  value: number | undefined | string;
}[]

const Home = ({ data }: { data: statsDataProps | null }) => {
  const MainComponent = dynamic(
    () => import("../components/Main"),
    { suspense: true }
  );

  const STATS = [
    {
      title: "Gas fee saved",
      value: data ? `$ ${data.feeSaved.toFixed(2)}` : 0,
    },
    {
      title: "Time saved",
      value: data ? formatSecondsToDHM(data.timeSaved) : 0,
    },
    {
      title: "Transaction Volume",
      value: data ? `$ ${data.volumeProcessed.toFixed(2)}` : 0,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#00FFA4" />
        <meta
          name="description"
          content="Dzap provides a unique DeFi experience. One can buy, sell, or send multiple digital assets in one single transaction and much more."
        />
        <meta
          name="keywords"
          content="Multiple tokens, single transaction,Batch Buy Token,Swap multiple tokens, Swap multiple tokens in a single transaction, Bulk Buy Token,Buy Multiple Token,Bulk Buy Crypto,Batch Buy Crypto, Buy Multiple Crypto, Bulk Buy Coin, Batch Buy Coin, Buy Multiple Coin, Bulk Sell Token, Batch Sell Token, Sell Mutiple Token, Bulk Sell Crypto, Batch Sell Crypto, Sell Mutiple Crypto, Bulk Sell Coin, Batch Sell Coin, Sell Mutiple Coin, DeFi Transaction, DeFi Bulk Transaction, Mutiple Token Transaction, Swap Multiple Token, Save Gas Fee, Save Transaction Time, Smart Defi Transactions, Rapid Defi Transactions, Smart Defi Transfers, Smart DeFI Swaps, Bulk Swap Token, Batch Swap Token, Swap Multiple Token, Multiple Swap Token"
        />
        <title>Dzap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Suspense fallback={<Spinner />}>
        <MainComponent data={STATS} />
      </Suspense>
    </>
  );
}
export async function getStaticProps() {
  const result = await fetch(API);
  const data = await result.json();
  if (!data) {
    return {
      props: { data: null }
    }
  }
  return {
    props: { data }
  }
}

export default Home
