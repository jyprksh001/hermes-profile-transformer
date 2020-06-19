import testData from './testData';
import { EventsPhase } from './types/Phases';
import {
  Event,
  DurationEvent,
  CompleteEvent,
  MetadataEvent,
  SampleEvent,
  ObjectEvent,
  ClockSyncEvent,
  AsyncEvent,
  ContextEvent,
  InstantEvent,
  CounterEvent,
  FlowEvent,
  MemoryDumpEvent,
  MarkEvent,
  LinkedIDEvent,
} from './types/EventInterfaces';
const events: Event[] = testData.traceEvents as Event[];

const handleDurationEvent = (event: DurationEvent): DurationEvent => {
  console.log(event.ph);
  return event;
};

const handleMetadataEvent = (event: MetadataEvent): MetadataEvent => {
  console.log(event.ph);
  return event;
};

const handleCompleteEvent = (event: CompleteEvent): CompleteEvent => {
  console.log(event.ph);
  return event;
};

const handleSampleEvent = (event: SampleEvent): SampleEvent => {
  console.log(event.ph);
  return event;
};

const handleObjectEvent = (event: ObjectEvent): ObjectEvent => {
  console.log(event.ph);
  return event;
};

const handleClockSyncEvent = (event: ClockSyncEvent): ClockSyncEvent => {
  console.log(event.ph);
  return event;
};

const handleAsyncEvent = (event: AsyncEvent): AsyncEvent => {
  console.log(event.ph);
  return event;
};

const handleContextEvent = (event: ContextEvent): ContextEvent => {
  console.log(event.ph);
  return event;
};

const handleInstantEvent = (event: InstantEvent): InstantEvent => {
  console.log(event.ph);
  return event;
};

const handleCounterEvent = (event: CounterEvent): CounterEvent => {
  console.log(event.ph);
  return event;
};

const handleFlowEvent = (event: FlowEvent): FlowEvent => {
  console.log(event.ph);
  return event;
};

const handleMemoryDumpEvent = (event: MemoryDumpEvent): MemoryDumpEvent => {
  console.log(event.ph);
  return event;
};

const handleMarkEvent = (event: MarkEvent): MarkEvent => {
  console.log(event.ph);
  return event;
};

const handleLinkedIDEvent = (event: LinkedIDEvent): LinkedIDEvent => {
  console.log(event.ph);
  return event;
};

events.forEach((event: Event): void => {
  switch (event.ph) {
    case EventsPhase.METADATA_EVENTS:
      handleMetadataEvent(event);
      break;

    case EventsPhase.DURATION_EVENTS_BEGIN:
    case EventsPhase.DURATION_EVENTS_END:
      handleDurationEvent(event);
      break;

    case EventsPhase.COMPLETE_EVENTS:
      handleCompleteEvent(event);
      break;

    case EventsPhase.SAMPLE_EVENTS:
      handleSampleEvent(event);
      break;

    case EventsPhase.OBJECT_EVENTS_CREATED:
    case EventsPhase.OBJECT_EVENTS_SNAPSHOT:
    case EventsPhase.OBJECT_EVENTS_DESTROYED:
      handleObjectEvent(event);
      break;

    case EventsPhase.CLOCK_SYNC_EVENTS:
      handleClockSyncEvent(event);
      break;

    case EventsPhase.ASYNC_EVENTS_NESTABLE_START:
    case EventsPhase.ASYNC_EVENTS_NESTABLE_INSTANT:
    case EventsPhase.ASYNC_EVENTS_NESTABLE_END:
      handleAsyncEvent(event);
      break;

    case EventsPhase.CONTEXT_EVENTS_ENTER:
    case EventsPhase.CONTEXT_EVENTS_LEAVE:
      handleContextEvent(event);
      break;
    case EventsPhase.INSTANT_EVENTS:
      handleInstantEvent(event);
      break;

    case EventsPhase.COUNTER_EVENTS:
      handleCounterEvent(event);
      break;

    case EventsPhase.FLOW_EVENTS_START:
    case EventsPhase.FLOW_EVENTS_STEP:
    case EventsPhase.FLOW_EVENTS_END:
      handleFlowEvent(event);
      break;

    case EventsPhase.MEMORY_DUMP_EVENTS_GLOBAL:
    case EventsPhase.MEMORY_DUMP_EVENTS_PROCESS:
      handleMemoryDumpEvent(event);
      break;

    case EventsPhase.MARK_EVENTS:
      handleMarkEvent(event);
      break;

    case EventsPhase.LINKED_ID_EVENTS:
      handleLinkedIDEvent(event);
      break;
    default: {
      // This case should only be hit if we've forgotten to handle
      // a type of event, or if the incoming data does not match any
      // of the expected phases at runtime
      throw new Error(
        `Unknown event type "${
          (event as any).ph
        }" in trace event ${JSON.stringify(event)}`
      );
    }
  }
});
