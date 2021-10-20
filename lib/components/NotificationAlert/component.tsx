import clsx from 'clsx';
import { FC } from 'react';
import { SuccessIcon, ErrorIcon, WarningIcon, InfoIcon } from '../Icons';

export enum NotificationType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Normal = 'normal',
}

const notificationTypeMap = {
  [NotificationType.Success]: {
    icon: <SuccessIcon />,
    iconBackground: 'bg-green-500',
    header: 'text-green-500 dark:text-green-400',
    headerString: 'Success',
  },
  [NotificationType.Error]: {
    icon: <ErrorIcon />,
    iconBackground: 'bg-red-500',
    header: 'text-red-500 dark:text-red-400',
    headerString: 'Error',
  },
  [NotificationType.Warning]: {
    icon: <WarningIcon />,
    iconBackground: 'bg-yellow-400',
    header: 'text-yellow-400 dark:text-yellow-300',
    headerString: 'Warning',
  },
  [NotificationType.Info]: {
    icon: <InfoIcon />,
    iconBackground: 'bg-blue-500',
    header: 'text-blue-500 dark:text-blue-400',
    headerString: 'Info',
  },
  [NotificationType.Normal]: {
    icon: null,
    iconBackground: 'bg-gray-800 dark:bg-gray-900',
    header: null,
    headerString: null,
  },
};

export interface NotificationAlertProps {
  /** Notification type e.g (Success) */
  variant:
    | NotificationType
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'normal';
  /** Notification content message */
  message?: string;
}

export const NotificationAlert: FC<NotificationAlertProps> = (props) => {
  const { variant, message = 'Placeholder message!' } = props;
  const { iconBackground, icon, header, headerString } = notificationTypeMap[
    variant
  ];

  if (variant === 'normal') {
    return (
      <div className="flex w-full min-h-[64px] max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

        <div className="flex items-center px-2 py-3">
          <div className="mx-3">
            <p className="text-gray-600 dark:text-gray-200">{message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-[64px] min-w-[350px] max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div
        className={clsx(
          'flex items-center justify-center w-12 flex-shrink-0',
          iconBackground
        )}
      >
        {icon}
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className={clsx('font-semibold', header)}>{headerString}</span>
          <p className="text-sm text-gray-600 dark:text-gray-200 break-words">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
