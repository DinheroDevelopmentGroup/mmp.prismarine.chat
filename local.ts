import loader, { type ChatMessage as TChatMessage } from 'prismarine-chat';

import registry from '../prismarine.registry/local.js';

export type ChatMessage = TChatMessage;

export const ChatMessage: typeof TChatMessage =
  // For whatever reason, vscode thinks prismarine-chat is actually
  // { default: prismarine-chat }
  // However, TypeScript Playground & ESLint think otherwise
  // (wtf???)
  (
    loader as (
      registryOrVersion: typeof registry | string,
    ) => typeof TChatMessage
  )(registry);

export const { MessageBuilder } = ChatMessage;

export type MessageBuilder = InstanceType<typeof MessageBuilder>;
