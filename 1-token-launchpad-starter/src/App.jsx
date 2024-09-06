import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  // WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


export default function App() {
  return (
      <div>
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/NXPBVxsNC7ibJue5qAMmlpz-sLPLEcXO"}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                <WalletMultiButton />
                {/*<WalletDisconnectButton />*/}
              </div>
              <TokenLaunchpad></TokenLaunchpad>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
  )
}
