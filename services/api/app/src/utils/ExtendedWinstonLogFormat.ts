import { TransformableInfo } from 'logform';

export default interface ExtendedWinstonLogFormat extends TransformableInfo {
  context: string;
  stack: string;
  timestamp: string;
}
