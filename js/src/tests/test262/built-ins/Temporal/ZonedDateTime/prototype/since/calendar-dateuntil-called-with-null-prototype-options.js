// |reftest| skip-if(!this.hasOwnProperty('Temporal')) -- Temporal is not enabled unconditionally
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: >
    Calendar.dateUntil method is called with a null-prototype object as the
    options value when call originates internally
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarCheckOptionsPrototypePollution();
const instance = new Temporal.ZonedDateTime(0n, "UTC", calendar);
const argument = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", calendar);
instance.since(argument, { largestUnit: "year" });
assert.sameValue(calendar.dateUntilCallCount, 1, "dateUntil should have been called on the calendar");

reportCompare(0, 0);
