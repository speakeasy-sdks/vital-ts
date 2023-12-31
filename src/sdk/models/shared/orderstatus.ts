/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * An enumeration.
 */
export enum OrderStatus {
    ReceivedWalkInTestOrdered = "received.walk_in_test.ordered",
    ReceivedWalkInTestRequisitionCreated = "received.walk_in_test.requisition_created",
    CompletedWalkInTestCompleted = "completed.walk_in_test.completed",
    SampleWithLabWalkInTestPartialResults = "sample_with_lab.walk_in_test.partial_results",
    FailedWalkInTestSampleError = "failed.walk_in_test.sample_error",
    CancelledWalkInTestCancelled = "cancelled.walk_in_test.cancelled",
    ReceivedAtHomePhlebotomyOrdered = "received.at_home_phlebotomy.ordered",
    ReceivedAtHomePhlebotomyRequisitionCreated = "received.at_home_phlebotomy.requisition_created",
    CollectingSampleAtHomePhlebotomyAppointmentScheduled = "collecting_sample.at_home_phlebotomy.appointment_scheduled",
    CollectingSampleAtHomePhlebotomyDrawCompleted = "collecting_sample.at_home_phlebotomy.draw_completed",
    CollectingSampleAtHomePhlebotomyAppointmentCancelled = "collecting_sample.at_home_phlebotomy.appointment_cancelled",
    CompletedAtHomePhlebotomyCompleted = "completed.at_home_phlebotomy.completed",
    SampleWithLabAtHomePhlebotomyPartialResults = "sample_with_lab.at_home_phlebotomy.partial_results",
    CancelledAtHomePhlebotomyCancelled = "cancelled.at_home_phlebotomy.cancelled",
    ReceivedTestkitOrdered = "received.testkit.ordered",
    ReceivedTestkitAwaitingRegistration = "received.testkit.awaiting_registration",
    ReceivedTestkitRequisitionCreated = "received.testkit.requisition_created",
    ReceivedTestkitRegistered = "received.testkit.registered",
    CollectingSampleTestkitTransitCustomer = "collecting_sample.testkit.transit_customer",
    CollectingSampleTestkitOutForDelivery = "collecting_sample.testkit.out_for_delivery",
    CollectingSampleTestkitWithCustomer = "collecting_sample.testkit.with_customer",
    CollectingSampleTestkitTransitLab = "collecting_sample.testkit.transit_lab",
    SampleWithLabTestkitDeliveredToLab = "sample_with_lab.testkit.delivered_to_lab",
    CompletedTestkitCompleted = "completed.testkit.completed",
    FailedTestkitFailureToDeliverToCustomer = "failed.testkit.failure_to_deliver_to_customer",
    FailedTestkitFailureToDeliverToLab = "failed.testkit.failure_to_deliver_to_lab",
    FailedTestkitSampleError = "failed.testkit.sample_error",
    FailedTestkitLost = "failed.testkit.lost",
    CancelledTestkitCancelled = "cancelled.testkit.cancelled",
    CancelledTestkitDoNotProcess = "cancelled.testkit.do_not_process",
}
