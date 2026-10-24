interface ICSEvent {
  title: string;
  start: Date;
  end: Date;
  location: string;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatICSDate(d: Date): string {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(
    d.getHours()
  )}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function buildICS(events: ICSEvent[]): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
  ];

  events.forEach((event, index) => {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${formatICSDate(new Date())}-${index}@wedding-invite`,
      `DTSTAMP:${formatICSDate(new Date())}`,
      `DTSTART:${formatICSDate(event.start)}`,
      `DTEND:${formatICSDate(event.end)}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.location}`,
      "END:VEVENT"
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function icsDataUri(events: ICSEvent[]): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(buildICS(events))}`;
}
