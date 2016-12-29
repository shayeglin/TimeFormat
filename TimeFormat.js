function TimeFormat(hour,format) {
        switch (format) {
            case '12':
                hour = hour - 12;
                return hour;
                break;
            case '24' :
                hour = hour + 12;
                return hour;
                break;
        }
    }
